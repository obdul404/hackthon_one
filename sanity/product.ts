import { defineType, defineField } from "sanity"

export const product = defineType({
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'description',
            title: 'Product Description',
            type: 'string'
        }),
        defineField({
            name: 'image',
            title: 'Product Image',
            type: 'image'
        }),
        defineField({
            name: 'price',
            title: 'Product Price',
            type: 'number'
        }),
        defineField({
            name: 'category',
            title: 'Product category',
            type: 'reference',
            to: [{
                type: "category"
            }]
        }),
        defineField({
            name: 'isFeatured',
            title: 'Featured Product',
            type: 'boolean'
        }),
        defineField(
            {
                title: 'Slug',
                name: 'slug',
                type: 'slug',
                options: {
                    source: 'title',
                    maxLength: 200, // will be ignored if slugify is set
                }
            }
        ),
    ]
});