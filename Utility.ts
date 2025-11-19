// UTILITY TYPE 

type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
    color?: string   
}

type ProductSummary = Pick<Product, 'color'|'id'|'name'
|'price' |'stock'> 

// remove un use Product
type ProductSummaryWithoutStock = Omit< Product, 'stock'>;
type RequiredProduct = Required<Product>

const productOne :RequiredProduct = {
    id:34, 
    name: "Supra mk4", 
    price:213423 ,  
    stock:23, 
    color:"Black"
} 

type OptionalType = Partial<Product >

type ProductReadOnly = Readonly<Product>

const emptyObj : Record<string, unknown> = {}

const product1 = {
    id: 313,
    name: "string",
    price: 324,
    stock: 43,
    color: "string"   
}