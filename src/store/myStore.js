// myStore.js
import { create } from 'zustand';

export const useStore = create((set) => ({
  myUser: null,
  posts: [],
  setPosts: (newPosts) => set({ posts: newPosts }),

  users: [],

  addUser: (username, password) => {
    if (!username || !password) {
      throw new Error('Username and password are required.');
    }

    if (username.length < 4 || username.length > 20) {
      throw new Error('Username must be between 4 and 20 characters.');
    }

    if (password.length < 4 || password.length > 20) {
      throw new Error('Password must be between 4 and 20 characters.');
    }

    if (!/\d/.test(password)) {
      throw new Error('Password must contain at least one number.');
    }

    set((state) => {
      // Check if the username is already taken
      const isUsernameTaken = state.users.some(
        (user) => user.username === username
      );
      if (isUsernameTaken) {
        throw new Error('Username is already taken.');
      }

      const updatedUsers = [...state.users, { username, password }];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      return { users: updatedUsers };
    });
  },

  login: async (username, password) => {
    // Validation checks
    if (!username || !password) {
      console.error('Username and password are required.');
      return null;
    }

    // Retrieve the users array from localStorage and parse it
    const storedUsers = localStorage.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    console.log('Users from local storage:', users);

    if (!username.trim() || !password.trim()) {
      console.error(
        'Username and password cannot be empty or whitespaces only.'
      );
      return null;
    }

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // Save user data to localStorage
      localStorage.setItem('myUser', JSON.stringify(user));

      // Set myUser to the retrieved user data
      set({ myUser: user });

      console.log('Successfully logged in:', user);

      return user;
    } else {
      console.error('Invalid username or password');
      return null;
    }
  },
  logout: () => {
    localStorage.removeItem('myUser');
    set({ myUser: null });
  },

  addPost: (post) => {
    set((state) => {
      const updatedPosts = [
        ...state.posts,
        {
          ...post,
          id: Math.floor(Math.random() * 1000000),
          timestamp: Date.now(),
          username: state.myUser ? state.myUser.username : 'Anonymous',
        },
      ];
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
      return { posts: updatedPosts };
    });
  },
  setMyUser: (user) =>
    set({ myUser: user ? { username: user.username } : null }),
}));
