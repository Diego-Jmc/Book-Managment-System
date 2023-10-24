import { IReviewRepository } from "../interfaces/interfaces";
import { Review } from "../models/models";
import { ReviewAbstractRepository } from "../repositories/repositories";



export default class ReviewServices{
    readonly repo:IReviewRepository = new ReviewAbstractRepository()

    async findAll(): Promise<Review[]>{
        return await this.repo.findAll()
    }

    async getReviewsByBookId(id:number):Promise<Review[]>{
        const reviews = await this.repo.findAll()
        return await reviews.filter(review=> review.fk_book == id)
    }

    async getBookAverageRating(id:number):Promise<number>{
        const reviews = await this.getReviewsByBookId(id)
        return reviews.reduce((acc,el)=> acc+el.stars,0) / reviews.length

    }

    async createReview(review:Review){
        await this.repo.create(review)
    }

}