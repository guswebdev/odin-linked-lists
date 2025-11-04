import { Node } from "./Node.js";

export class LinkedList {
  constructor() {
    this._head = null;
  }
  /* AGREGAR UN NODO A LA LISTA AL FINAL*/
  append(value) {
    let newNode = new Node(value);
    if (!this._head) {
      this._head = newNode;
      return;
    }
    let current = this._head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  /* AGREGAR UN NODO A LA LISTA AL COMIENZO*/
  prepend(value) {
    let newNode = new Node(value);
    if (!this._head) {
      this._head = newNode;
      return;
    }
    //let current = this._head;

    newNode.next = this._head;
    this._head = newNode;
  }
  /* DEVUELVE EL NUMERO TOTAL DE NODOS */
  size() {
    let count = 0;
    let node = this._head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  /* DEVUELVE EL PRIMER NODO DE LA LISTA */
  head() {
    return this._head;
  }
  /* DEVUELVE EL ULTIMO NODO DE LA LISTA */
  tail() {
    let lastNode = this._head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }
  /* DEVUELVE EL NODO EN LA POSICION DADA */
  at(index) {
    let current = this._head;
    let i = 0;

    while (i < index) {
      current = current.next;
      i++;
    }

    return current.value;
  }
  /* ELIMINA EL ULTIMO NODO DE LA LISTA */
  pop() {
    if (this._head === null) return;
    let prev = null;
    let current = this._head;
    if (current.next === null) {
      this._head = null;
      return;
    }
    while (current.next != null) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
  }
  /* DEVUELVE TRUE SI EL VALOR ESTA EN LA LISTA, DE LO CONTRARIO DEVUELVE FALSE */
  contains(value) {
    let current = this._head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  /* DEVUELVE EL INDICE DEL NODO QUE CONTIENE EL VALOR, O NULL SI NO LO ENCUENTRA */
  find(value) {
    let current = this._head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
  /* REPRESENTA LA LISTA COMO CADENA, PARA VER EN CONSOLA
    EL FORMATO ES: ( value ) -> ( value ) -> ( value ) -> null
  */
  toString() {
    let current = this._head;
    let result = "";
    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.next;
    }
    console.log(result + "null");
  }
  /* INSERTA UN NUEVO NODO CON EL VALOR EN LA POSICION DEL INDEX */
  insertAt(value, index) {
    //crea un nuevo nodo con el valor
    let newNode = new Node(value);
    //si el index es 0 lo agregamos como head
    if (index === 0) {
      newNode.next = this._head;
      this._head = newNode;
    } else {
      let current = this._head;
      let prev = null;
      let i = 0;

      while (i < index) {
        prev = current;
        current = current.next;
        i++;
      }

      prev.next = newNode;
      newNode.next = current;
    }
  }
  /* ELIMINA EL NODO EN LA POSICION DEL INDEX */
  removeAt(index) {
    let current = this._head;
    if (index === 0) {
      this._head = current.next;
    } else {
      let prev = null;
      let i = 0;

      while (i < index) {
        prev = current;
        current = current.next;
        i++;
      }
      prev.next = current.next;
    }
    return current.value;
  }
  /* ESTE ERA AUXILIAR MIENTRAS CREABA EL METODO toString() */
  printList() {
    let current = this._head;
    let result = "";
    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }
}
