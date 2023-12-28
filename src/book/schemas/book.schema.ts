import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export enum Catagory{
    ADVENTURE = 'Adventure',
    CLASSICAL = 'Classical',
    CRIME = 'Crime',
    FANTACY = 'Fantacy'


}

@Schema({
    timestamps:true

})
export class Book {
    @Prop()
    title:string;

    @Prop()
    description:string;

    @Prop()
    author:string;

    @Prop()
    price:string;

    @Prop()
    Catagory:Catagory;

}
export const BookSchema = SchemaFactory.createForClass(Book)