import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

# Load .env cho local dev; trên Render dùng env trực tiếp
load_dotenv(dotenv_path=os.path.join(os.path.dirname(os.path.dirname(__file__)), '..', '.env'), override=True)


def build_engine():
    # Ưu tiên Postgres qua DATABASE_URL (Render/Prod)
    db_url = os.getenv('DATABASE_URL')
    if db_url:
        # Chuẩn hóa scheme cho SQLAlchemy
        if db_url.startswith('postgres://'):
            db_url = db_url.replace('postgres://', 'postgresql+psycopg2://', 1)
        elif db_url.startswith('postgresql://') and '+psycopg2' not in db_url:
            db_url = db_url.replace('postgresql://', 'postgresql+psycopg2://', 1)
        # Thêm sslmode=require nếu thiếu
        if db_url.startswith('postgresql+psycopg2://') and 'sslmode=' not in db_url:
            sep = '&' if '?' in db_url else '?'
            db_url = f"{db_url}{sep}sslmode=require"
        return create_engine(db_url, pool_pre_ping=True)

    # Fallback MSSQL (python-tds, không cần ODBC)
    host = os.getenv('HOST')
    port = os.getenv('PORT') or '1433'
    database = os.getenv('DATABASE')
    user = os.getenv('USER')
    password = os.getenv('PASSWORD')  # Nên URL-encode nếu có ký tự đặc biệt
    mssql_url = f"mssql+pytds://{user}:{password}@{host}:{port}/{database}?charset=utf8"
    return create_engine(mssql_url, pool_pre_ping=True)


engine = build_engine()
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
