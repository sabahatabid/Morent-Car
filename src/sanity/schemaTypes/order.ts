export default {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields:[
        {
            name: 'firstName',
            title: 'FirstName',
            type: 'string'
        },
        {
            name: 'lastName',
            title: 'LastName',
            type: 'string'
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string'
        },
        {
            name: 'city',
            title: 'City',
            type: 'string'
        },
        {
            name: 'zipCode',
            title: 'ZipCode',
            type: 'string'
        },
        {
            name: 'discount',
            type:'number',
            title:'Discount'
        },
        {
            name: 'phone',
            title: 'Phone',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'cartItem',
            title: 'Cart Item',
            type: 'array',
            of : [{type: 'reference', to: {type: 'car'}}]
        },
        {
            name: 'total',
            title: 'Total',
            type: 'string'
        },
        {
            name: 'status',
           title: 'Order Status',
           type: 'string',
            option: {
                list: [
                   {title: 'Pending', value: 'pending'},
                    {title: 'success', value: 'Success'},
                    {title: 'Dispatch', value: 'dispatch'},
                ],
               layout: 'radio'
           },
           initialValue : 'pending'
        },
    ]
}