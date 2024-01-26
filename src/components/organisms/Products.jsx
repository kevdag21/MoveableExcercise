/* eslint-disable react/prop-types */
import '../../styles/Product.css'
import { AddToCartIcon, RemoveFromCartIcon } from '../atoms/Icons.jsx'
import { useCart } from '../../hooks/useCart.js'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContextHelper.jsx'

// eslint-disable-next-line react/prop-types
export function Products({ products }) {
    const { addToCart, removeFromCart, cart } = useCart()

    const theme = useContext(ThemeContext) 

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className='products'>
            <ul>
                {products.slice(0, 10).map(product => {
                    const isProductInCart = checkProductInCart(product)

                    return (
                        <li key={product.id} className={"li-" + theme.theme}>
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                            />
                            <div>
                                <strong>{product.title}</strong> - ${product.price}
                            </div>
                            <div>
                                <button
                                    style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }} onClick={() => {
                                        isProductInCart
                                            ? removeFromCart(product)
                                            : addToCart(product)
                                    }}
                                >
                                    {
                                        isProductInCart
                                            ? <RemoveFromCartIcon />
                                            : <AddToCartIcon />
                                    }
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}
