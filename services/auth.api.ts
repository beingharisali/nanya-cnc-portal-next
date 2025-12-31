const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function login(email: string, password: string) {
	console.log('Making login request to:', `${API_BASE_URL}/auth/login`);
	try {
		const response = await fetch(`${API_BASE_URL}/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		});

		console.log('Login response status:', response.status);
		
		if (!response.ok) {
			const errorData = await response.json().catch(() => ({ message: 'Network error' }));
			throw new Error(errorData.message || 'Login failed');
		}

		const data = await response.json();
		
		if (data.token) {
			localStorage.setItem('token', data.token);
		}
		
		return data;
	} catch (error) {
		console.error('Login error:', error);
		throw error;
	}
}

export async function signup(name: string, email: string, password: string) {
	console.log('Making signup request to:', `${API_BASE_URL}/auth/signup`);
	try {
		const response = await fetch(`${API_BASE_URL}/auth/signup`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name, email, password }),
		});

		console.log('Signup response status:', response.status);
		
		if (!response.ok) {
			const errorData = await response.json().catch(() => ({ message: 'Network error' }));
			throw new Error(errorData.message || 'Signup failed');
		}

		return await response.json();
	} catch (error) {
		console.error('Signup error:', error);
		throw error;
	}
}