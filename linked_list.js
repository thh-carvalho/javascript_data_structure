class Node_list{
    constructor(e){
        this.e = e
        this.next = undefined
    }
}

class LinkedList{
    constructor(){
        this.head = undefined
    }

    insertFirst(element){
        const new_element = new Node_list(element)
        let current

        if (!this.head) {
            this.head = new_element
        }else{
            current = this.head
            new_element.next = current
            this.head = new_element
        }

        return element
    }

    insertLast(element){
        const new_element = new Node_list(element)
        let current

        if(!this.head){
            this.head = new_element
        }else{
            current = this.head
            while(current.next){
                current = current.next
            }

            current.next = new_element
        }

        return element
    }

    searchAt(position){
        let current = this.head
        for(let i = 0; i < position && current; i++){
            current = current.next
        }

        return current
    }

    insertAt(element, position){
        const new_element = new Node_list(element)
        if(position == 0){
            this.insertFirst(element)
        }else{
            const previous = this.searchAt(position -1)
            const current = previous.next
            new_element.next  = current
            previous.next = new_element
        }

        return element
    }

    traversal(){
        if (!this.head){
            return undefined
        }else{
            let current = this.head
            let list_elements = []
            while(current){
                list_elements.push(current.e)
                current = current.next
            }

            return list_elements
        }
    }

    deleteAt(position){
        let current = this.head
        if(position == 0){
            this.head = current.next
        }else{
            let previous = current
            for(let i = 0; i < position; i++){
                previous = current
                current = current.next
            }
            previous.next = current.next
        }

        return position
    }

    indexOf(element){
        let current = this.head
        let sum = 0
        while(current){
            if(current.e == element){
                return sum
                break
            }else{
                current = current.next
                sum++
            }
        }
        return undefined
    }
}
