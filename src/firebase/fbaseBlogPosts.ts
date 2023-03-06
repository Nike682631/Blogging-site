import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from './index.js'
import { BlogRegisterModel } from 'src/components/models'

const createBlog = async (data: BlogRegisterModel) => {
    try {
        const docRef = await addDoc(collection(db, 'blogs'), {
            title: data.title,
            description: data.description,
            author: data.author,
            tags: data.tags,
            comments: data.comments
        });
        console.log('Document written with ID: ', docRef.id);
        return docRef;
    } catch (e) {
        console.error('Error adding document: ', e);
    }
}

export const getBlogs = async () => {
    const querySnapshot = await getDocs(collection(db, 'blogs'));
    return querySnapshot;
}

export default createBlog