import express from 'express'
import { createNotice, deleteNotice, getAllNotice, updateNotice } from '../controller/notice_controller'
const notice_route=express.Router()

notice_route.get('/',getAllNotice)
notice_route.post('/add-notice',createNotice)
notice_route.delete('/:id',deleteNotice)
notice_route.put("/:id",updateNotice)

export default notice_route