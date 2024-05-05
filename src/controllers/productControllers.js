import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore";
import firebase from "../firebase.js";
import Product from "../models/productModel.js";

const db = getFirestore(firebase);

export const createPorduct = async (req, res, next) => {
    try {
        const data = req.body;
        await addDoc(collection(db, "products"), data);
        res.status(200).send("Product created successfully");
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const getProducts = async (req, res, next) => {
    try {
        const products = await getDocs(collection(db, "products"));
        const productsArray = [];

        if (products.empty) {
            res.status(404).send("No products found");
        } else {
            products.forEach((doc) => {
                const product = new Product(
                    doc.id,
                    doc.data().name,
                    doc.data().price,
                    doc.data().retailer,
                    doc.data().amountInStock
                );
                productsArray.push(product);
            });
            res.status(200).send(productsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const getProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        const product = doc(db, "products", id);
        const data = await getDocs(product);
        if (data.exists()) {
            res.status(200).send(data.data());
        } else {
            res.status(404).send("Product not found");
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export const updateProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const product = doc(db, "products", id);
        await updateDoc(product, data);
        res.status(200).send("Product updated successfully");
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export const deleteProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        const product = doc(db, "products", id);
        await deleteDoc(product);
        res.status(200).send("Product deleted successfully");
    } catch (error) {
        res.status(400).send(error.message);
    }
}