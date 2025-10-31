import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

# Load .env (local dev). Trên Render dùng env trực tiếp
load_dotenv(dotenv_path=os.path.join(os.path.dirname(os.path.dirname(__file__)), '..', '.env'), override=True)

def build_engine():
    # Ưu tiên DATABASE_URL (Render Postgres)
    db_url = os.getenv('DATABASE_URL')
    if db_url:
        # Normalize postgres scheme for SQLAlchemy
        if db_url.startswith('postgres://'):
            db_url = db_url.replace('postgres://', 'postgresql+psycopg2://', 1)
        elif db_url.startswith('postgresql://') and '+psycopg2' not in db_url:
            db_url = db_url.replace('postgresql://', 'postgresql+psycopg2://', 1)
        return create_engine(db_url, pool_pre_ping=True)

    # Fallback MSSQL (local legacy)
    host = os.getenv('HOST')
    port = os.getenv('PORT')
    database = os.getenv('DATABASE')
    user = os.getenv('USER')
    password = os.getenv('PASSWORD')
    mssql_url = (
        f"mssql+pyodbc://{user}:{password}@{host}:{port}/{database}?driver=ODBC+Driver+17+for+SQL+Server"
    )
    return create_engine(mssql_url, pool_pre_ping=True)


engine = build_engine()
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
