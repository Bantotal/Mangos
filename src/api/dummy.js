const api = {
  cuentas: {
    async get () {
      const response = [
        {
           uid: "1",
           productType: "CC",
           currency: "USD",
           balance: "1200",
           description: "Cuenta corriente 1"
        },
        {
            uid: "2",
            productType: "CC",
            currency: "$",
            balance: "25800",
            description: "Cuenta corriente 2"
        },
        {
            uid: "3",
            productType: "CA",
            currency: "USD",
            balance: "100",
            description: "Caja de ahorro 1"
        },
         {
            uid: "4",
            productType: "CA",
            currency: "$",
            balance: "78500",
            description: "Caja de ahorro 2"
        },
      ]
      return response
    }
  },

  movimientos: {
    async get (uid) {
      const response = [
        {        
            uid: "AA45GH5TM789DS34",
            transactionId: "ASD56F54G890KKL",
            signature: "a4e29a77cc84c393da1da7d06beb0ec0d12ae58314e26b137f913f4f85e25e2f",
            type: "Debit",
            date: "2016-11-18T17:59:11.858Z",
            valueDate: "2016-11-18T17:59:11.858Z",
            balance: "14060",
            currency: "USD",
            ammount: "500",
            reference: "Impuestos",
            reason: "Pago de sueldo",
            chanel: "Cajero automático"  
        },
        {        
            uid: "AA45GH5TM789DS34-p",
            transactionId: "ASD56F54G890KKL",
            signature: "a4e29a77cc84c393da1da7d06beb0ec0d12ae58314e26b137f913f4f85e25e2f",
            type: "Credit",
            date: "2016-11-18T17:59:11.858Z",
            valueDate: "2016-11-18T17:59:11.858Z",
            balance: "14060-p",
            currency: "USD",
            ammount: "500-p",
            reference: "Impuestos-p",
            reason: "Pago de sueldo-p",
            chanel: "Cajero automático-p"  
        },
        {        
            uid: "AA45GH5TM789DS34-r",
            transactionId: "ASD56F54G890KKL",
            signature: "a4e29a77cc84c393da1da7d06beb0ec0d12ae58314e26b137f913f4f85e25e2f",
            type: "Debit",
            date: "2016-11-18T17:59:11.858Z",
            valueDate: "2016-11-18T17:59:11.858Z",
            balance: "14060-r",
            currency: "USD",
            ammount: "500-r",
            reference: "Impuestos-r",
            reason: "Pago de sueldo-r",
            chanel: "Cajero automático-r"  
        }
      ]
      return response
    },   
  },
}

export default api