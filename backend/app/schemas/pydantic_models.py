from typing import List, Optional
from pydantic import BaseModel

class ProductFeature(BaseModel):
    title: str
    subFeatures: List[str]

class ProductOut(BaseModel):
    id: str
    name: str
    description: Optional[str] = None
    image: Optional[str] = None
    category: str
    subCategory: str
    slug: Optional[str] = None
    features: Optional[List[ProductFeature]] = None
    datasheet: Optional[str] = None
    detail_key_features: Optional[List[str]] = None
    detail_images: Optional[List[str]] = None

class Overview(BaseModel):
    summary: str
    keyFeatures: List[str]
    datasheetLink: str

class ProductDetailOut(BaseModel):
    id: str
    slug: str
    name: str
    images: List[str]
    overview: Overview
    features: Optional[List[ProductFeature]] = None
    datasheet: Optional[str] = None
