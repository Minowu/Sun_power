from typing import List, Generator, Optional
import json
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import SessionLocal
from app.schemas.product import Product as ProductORM
from app.schemas.pydantic_models import ProductOut, ProductDetailOut, Overview, ProductFeature

router = APIRouter(prefix="/api", tags=["products"])

def get_db() -> Generator[Session, None, None]:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def safe_json_loads(value: Optional[str]):
    if not value:
        return None
    try:
        return json.loads(value)
    except Exception:
        return None


def orm_to_product_out(p: ProductORM) -> ProductOut:
    features = safe_json_loads(p.features)
    detail_key_features = safe_json_loads(p.detail_key_features)
    detail_images = safe_json_loads(p.detail_images)
    return ProductOut(
        id=p.id,
        name=p.name,
        description=p.description,
        image=p.image,
        category=p.category,
        subCategory=p.subCategory,
        slug=p.slug,
        features=features,
        datasheet=p.datasheet,
        detail_key_features=detail_key_features,
        detail_images=detail_images,
    )

@router.get("/products", response_model=List[ProductOut])
def get_products(db: Session = Depends(get_db)) -> List[ProductOut]:
    rows = db.query(ProductORM).all()
    return [orm_to_product_out(r) for r in rows]

@router.get("/products/{product_id}", response_model=ProductOut)
def get_product(product_id: str, db: Session = Depends(get_db)) -> ProductOut:
    row: Optional[ProductORM] = db.get(ProductORM, product_id)
    if not row:
        raise HTTPException(status_code=404, detail="Product not found")
    return orm_to_product_out(row)
