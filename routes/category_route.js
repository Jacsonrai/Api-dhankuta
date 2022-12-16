import express from 'express'
import { add_vendor_category, delete_category, get_all_vendor_category, update_vendor_category } from '../controller/category_controller'
const category_route=express.Router()

category_route.get('/',get_all_vendor_category)
category_route.post('/add-category',add_vendor_category)
category_route.delete('/:id',delete_category)
category_route.put('/:id',update_vendor_category)
export default category_route