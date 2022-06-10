//LIFO
class Stack {
    constructor(){
        this.itens = []
    }

    push(item ){
        this.itens.push(item)
    }

    pop(){
        this.itens.pop()
    }

    top(){
        return this.itens[this.itens.length - 1]
    }

    isEmpty(){
        return this.itens.length == 0
    }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)

stack.pop()

console.table(stack.isEmpty())