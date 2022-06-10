//FIFO
class Queue{
    constructor(){
        this.itens = []
    }

    enqueue(item){
        this.itens.push(item)
    }

    inEmpty(){
        return this.itens.length == 0
    }

    dequeue(){
        if(this.isEmpty()) return undefined

        return this.itens.shift();
    }

    front(){
        return this.itens[0]
    }

    rear(){
        return this.itens[this.itens.length - 1]
    }
}

//LIFO
class Lifo{
    constructor(){
        this.itens = []
    }

    insertFront(item){
        return this.itens.unshift(item)
    }

    insertLast(item){
        return this.itens.push(item)
    }

    deleteFront(){
        if(this.inEmpty()) return undefined
        return this.itens.shift()
    }

    deleteLast(){
        if(this.inEmpty()) return undefined
        return this.itens.pop()
    }

    inEmpty(){
        return this.itens.length == 0
    }

    front(){
        this.itens[0]
    }

    rear(){
        return this.itens[this.itens.length - 1]
    }
}