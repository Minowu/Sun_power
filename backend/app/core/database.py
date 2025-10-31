import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

# Override để ưu tiên giá trị trong .env thay vì env hệ thống (USER, etc.)
load_dotenv(dotenv_path=os.path.join(os.path.dirname(os.path.dirname(__file__)), '..', '.env'), override=True)

HOST = os.getenv('HOST')
PORT = os.getenv('PORT')
DATABASE = os.getenv('DATABASE')
USER = os.getenv('USER')
PASSWORD = os.getenv('PASSWORD')

DATABASE_URL = f'mssql+pyodbc://{USER}:{PASSWORD}@{HOST}:{PORT}/{DATABASE}?driver=ODBC+Driver+17+for+SQL+Server'

engine = create_engine(DATABASE_URL, fast_executemany=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
