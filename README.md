# Dynamic-Table-and-Pagination

Demo link: [Netlify](https://dynamictableandpagination.netlify.app/ "Netlify")

This is a basic project which consist of a pagination and dynamic table.

After providing a json array, by selecting page index and page size you can select the elements of the array in the relevant range. 

By changing index and size you can manage the range you will see.

Dynamic table means a table that can show all of the objects you give it, no matter how many columns they have. For example, you can easily show below array just pass it to table

```json
[
    {
        "userId": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    }
]
```
**NOTE:** for now, component does not support nested json elements

![at](https://github.com/Mehmet-Emre-Topdal/Dynamic-Table-and-Pagination/assets/108151964/d1b0be3b-4a1f-4003-bc76-e3a1f024ff64)

