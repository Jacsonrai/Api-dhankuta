import express from 'express'
import { get_all_news } from '../controller/news_controller'

const news_route=express.Router()

news_route.get('/',get_all_news)

export default news_route