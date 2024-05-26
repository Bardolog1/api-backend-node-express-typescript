export type Category = 'fruits' | 'vegetables' | 'meat' | 'dairy' | 'bakery' | 'beverages' | 'others';

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: Category;
    image: string;
    count: number;
}
