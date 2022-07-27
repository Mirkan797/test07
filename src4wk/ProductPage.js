import ProductOption from "./ProductOptions.js"
import { request } from "./api.js"

/*
 * {
        productId: 1,
        product: Product,
        optionData: []
    }
 * 
 */
export default function ProductPage({
    $target,
    initialState
}) {
    const $product = document.createElement('div')

    $target.appendChild($product)

    this.state = initialState

    const ProductOptions = new ProductOptions({
        $target: $product,
        initialState: [],
        onSelect: (option) => {
            console.log(option)
        }
    })

    this.setState = nextState => {
        if (nextState.productId !== this.state.productId) {
            fetchOptionData(nextState.productId)
            return
        }

        this.state = nextState
        ProductOptions.setState(this.state.optionData)
    }

    this.render = () => {}
    this.render()

    const fetchOptionData = (productId) => {
        return request(`/products/${productId}`)
            .then(product => {
                this.setState({
                    ...this.state,
                    product,
                    optionData: []
                })
                .then(ProductOptions => {
                    return Promise.all([
                        Promise.resolve(ProductOptions),
                        Promise.all(
                            ProductOptions.map(ProductOption => ProductOption.id).map(id => {
                                return request(`/product-option-stocks?productOption.id=${id}`)
                            })
                        )
                    ])
                })
                .then(data => {
                    const [productOptions, stocks] = data
                    const optionData = productOptions.map((productOption, i) => {
                        const stock = stocks[i][0].stock

                        return {
                            optionId: productOption.id,
                            optionName: productOption.optionName,
                            optionPrice: productOption.optionPrice,
                            stock
                        }
                    })
                    this.setState({
                        ...this.state,
                        optionData
                    })
                })
            })
    }

    fetchOptionData(this.state.productId)
}
