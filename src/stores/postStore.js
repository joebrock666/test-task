import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const usePostStore = defineStore('postStore', () => {
    const posts = ref([])
    const isLoading = ref(false)
    const error = ref(null)
    const currentPage = ref(1)
    const totalPosts = ref(0)

    const fetchPosts = async (page = 1) => {
        isLoading.value = true
        error.value = null
        currentPage.value = page

        try {
            const { data, headers } = await axios.get(
                `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
            )
            posts.value = data
            totalPosts.value = Number(headers['x-total-count'])

        } catch (err) {
            error.value = 'Failed to fetch posts'
        } finally {
            isLoading.value = false
        }
    }

    const addPost = async (title, body) => {
        isLoading.value = true
        error.value = null

        try {
            const { data } = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
                title,
                body,
                userId: 1
            })
            posts.value.unshift(data)
            totalPosts.value += 1
        } catch (err) {
            error.value = 'Failed to add post'
        } finally {
            isLoading.value = false
        }
    }

    return { posts, isLoading, error, currentPage, totalPosts, fetchPosts, addPost }
})