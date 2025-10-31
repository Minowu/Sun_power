from sqlalchemy import Column, String, Text
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Product(Base):
    __tablename__ = "product"
    id = Column(String(100), primary_key=True, unique=True, nullable=False)
    name = Column(String(255), nullable=False)
    description = Column(Text, nullable=True)
    image = Column(String(255), nullable=True)
    category = Column(String(100), nullable=False)
    subCategory = Column(String(100), nullable=False)
    slug = Column(String(255), nullable=True)
    features = Column(Text, nullable=True)            # JSON.stringify
    datasheet = Column(String(512), nullable=True)
    detail_key_features = Column(Text, nullable=True) # JSON array
    detail_images = Column(Text, nullable=True)       # JSON array
