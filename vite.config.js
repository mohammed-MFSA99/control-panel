import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";


export default defineConfig({

    plugins: [
        handlebars({
            partialDirectory: './src/partials',
        })
    ],
    build: {
        rollupOptions: {
            input: {
                main: `/index.html`,
                products: `/products.html`,
                users: `/users.html`,
                orders: `/orders.html`,
                addProduct: `/add-product.html`,
                addUser: `/add-user.html`

            }
        }
    }
})


