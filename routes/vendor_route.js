import express from 'express'
import { add_vendor, get_all_vendor, get_single_vendor } from '../controller/vendor_controller'
const vendor_route=express.Router()

vendor_route.get('/',get_all_vendor)
vendor_route.get('/search',get_single_vendor)
vendor_route.post('/add-vendor',add_vendor)

export default vendor_route