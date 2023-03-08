import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from './index.js'
import { BlogModel } from 'src/components/models'

const createBlog = async (data: BlogModel) => {
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

export const editBlog = async (data: BlogModel, userId: string, postId: string) => {
    try {

        const postRef = doc(db, 'blogs', postId);
        const postDoc = await getDoc(postRef);
        if (postDoc.exists() && postDoc.data()?.author === userId) {
            const docRef = await updateDoc(postRef, {
                title: data.title,
                description: data.description,
                author: data.author,
                tags: data.tags,
                comments: data.comments
            });
            console.log('Document updated with ID: ', postId);
            return docRef;
        }
        else {
            throw new Error('Post not found or unauthorized to delete');
        }
    } catch (e) {
        console.error('Error updating document: ', e);
    }
}

export const getBlogs = async () => {
    const querySnapshot = await getDocs(collection(db, 'blogs'));
    return querySnapshot.docs;
}

export const fetchBlogById = async (id: string) => {
    try {
        const blogsCollection = collection(db, 'blogs')
        const blogDoc = doc(blogsCollection, id)
        const blogData = await getDoc(blogDoc)

        if (blogData.exists()) {
            return blogData.data()
        } else {
            console.log(`Blog with ID ${id} not found`)
        }
    } catch (error) {
        console.error(error)
    }
}

export const deleteBlogPostById = async (userId: string, postId: string) => {
    const postRef = doc(db, 'blogs', postId);
    const postDoc = await getDoc(postRef);
    if (postDoc.exists() && postDoc.data()?.author === userId) {
        await deleteDoc(postRef);
    } else {
        throw new Error('Post not found or unauthorized to delete');
    }
}

export default createBlog