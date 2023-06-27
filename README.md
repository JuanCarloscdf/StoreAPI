# Entity



| users      | products     |cart               | saleDetail| |
|:----------:|--------------|-------------------|---|---|
| first_name | name         | product           | prodcuts| |
| first_name | brand        | total             | date| |
| email      | collection   | discountedTotal   | userId| |
| cellphone  | price        | userId            | direction| |
| type       | discount     | totalProducts     | | |
| media      | description  | totalQuantity     | | |
| user_id    | category     |                   | | |
| directions | stock        | | | |
|

# Users

| users      | user_type    | direction     |    
|:----------:|--------------|---------------|
| user_id    | type_id      | user_id  | 
| first_name | type         | country       | 
| last_name  |              | state         | 
| email      |              | adress        | 
| cellphone  |              |               | 
|

# Products

| product    | brand        |   collection  | category_item     |    
|:----------:|--------------|---------------|--------------|
| product_id | brand_id     | product_id | product_id  | 
| name       | brand        | collection    | category_id      | 
| price      |              |               |          | 
| discount   |              |               |         | 
| description|              |               |        | 
| stock      |              |               |         | 
|

# cart

| product    |dep| cart_item  |  
|:----------:|---|:------------: |
| cart_id    |dep|cart_id        | 
| user_id    |dep|cnt            |
|            |   |product_id     |
|

 

# order

| order          |order_item    |payment_method|    
|:--------------:|:------------:|--------------|
| order_id       |order_id      | method_id|
| user_id        |cnt           | method|
| order_item_id  |product_id    |   |
| direction_id   |              ||
|total           |              ||
|method_id       |              ||

