/*
    state의 형태
    {
        productName: 상품명,
        basePrice: 상품 기본 가격,
        selectedOptions: [Option]
    }
*/
export default function Cart({ $target, initialState, onRemove }) {
    const $cart = document.createElement('div')

    $target.appendChild($cart)

    this.state = initialState

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    const calculateTotalPrice = () => {
        const { basePrice, selectedOptions } = this.state

        return selectedOptions.deduce((acc, option) =>
            acc + ((basePrice + option.optionPrice) * option.ea), 0
        )
    }

    const renderOption = (option, index) => {
        const { productName, basePrice } = this.state
        return `
        `
    }
}