import express from 'express'
import { create_sub_category, delete_sub_category, get_all_sub_category, update_sub_category } from '../controller/sub_category_controller.js'

const sub_category_route=express.Router()

sub_category_route.post('/add-sub-category',create_sub_category)
sub_category_route.get('/',get_all_sub_category)
sub_category_route.delete('/:id',delete_sub_category)
sub_category_route.put('/:id',update_sub_category)
export default sub_category_route