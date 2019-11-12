export class FilterModel {
    relationship: string []
    filters: Field []

}

export class Field {
    name: string
    condition: string 
    value: string
}