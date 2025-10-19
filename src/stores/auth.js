import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { auth } from '../lib/supabase.js'

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref(null)
  const loading = ref(false)
  const error = ref(null)

  // Getters
  const isAuthenticated = computed(() => !!user.value)
  const userEmail = computed(() => user.value?.email || '')
  const userId = computed(() => user.value?.id || '')

  // Actions
  const setUser = (userData) => {
    user.value = userData
  }

  const setLoading = (isLoading) => {
    loading.value = isLoading
  }

  const setError = (errorMessage) => {
    error.value = errorMessage
  }

  const clearError = () => {
    error.value = null
  }


  // Sign in
  const signIn = async (email, password) => {
    setLoading(true)
    clearError()
    
    try {
      const { data, error: signInError } = await auth.signIn(email, password)
      
      if (signInError) {
        setError(signInError.message)
        return { success: false, error: signInError }
      }
      
      setUser(data.user)
      return { success: true, data }
    } catch (err) {
      setError('خطا در ورود')
      return { success: false, error: err }
    } finally {
      setLoading(false)
    }
  }
  

  // Sign out
  const signOut = async () => {
    setLoading(true)
    clearError()
    
    try {
      const { error: signOutError } = await auth.signOut()
      
      if (signOutError) {
        setError(signOutError.message)
        return { success: false, error: signOutError }
      }
      
      setUser(null)
      return { success: true }
    } catch (err) {
      setError('خطا در خروج')
      return { success: false, error: err }
    } finally {
      setLoading(false)
    }
  }

  // Get current user
  const getCurrentUser = async () => {
    setLoading(true)
    clearError()
    
    try {
      const { user: currentUser, error: userError } = await auth.getCurrentUser()
      
      if (userError) {
        setError(userError.message)
        return { success: false, error: userError }
      }
      
      setUser(currentUser)
      return { success: true, user: currentUser }
    } catch (err) {
      setError('خطا در دریافت اطلاعات کاربر')
      return { success: false, error: err }
    } finally {
      setLoading(false)
    }
  }

  // Update password
  const updatePassword = async (newPassword) => {
    setLoading(true)
    clearError()
    
    try {
      const { data, error: updateError } = await auth.updatePassword(newPassword)
      
      if (updateError) {
        setError(updateError.message)
        return { success: false, error: updateError }
      }
      
      return { success: true, data }
    } catch (err) {
      setError('خطا در تغییر رمز عبور')
      return { success: false, error: err }
    } finally {
      setLoading(false)
    }
  }

  // Reset password
  const resetPassword = async (email) => {
    setLoading(true)
    clearError()
    
    try {
      const { data, error: resetError } = await auth.resetPassword(email)
      
      if (resetError) {
        setError(resetError.message)
        return { success: false, error: resetError }
      }
      
      return { success: true, data }
    } catch (err) {
      setError('خطا در ارسال ایمیل بازیابی')
      return { success: false, error: err }
    } finally {
      setLoading(false)
    }
  }

  // Initialize auth state
  const initializeAuth = () => {
    // Listen to auth state changes
    auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        setUser(session.user)
      } else if (event === 'SIGNED_OUT') {
        setUser(null)
      }
    })
  }

  return {
    // State
    user,
    loading,
    error,
    
    // Getters
    isAuthenticated,
    userEmail,
    userId,
    
    // Actions
    setUser,
    setLoading,
    setError,
    clearError,

    signIn,
    signOut,
    getCurrentUser,
    updatePassword,
    resetPassword,
    initializeAuth
  }
})
