// Automatically detect if running locally or on network
// If accessing from localhost, use localhost
// If accessing from network IP, use network IP

const getBackendIP = () => {
    const hostname = window.location.hostname;
    
    // If accessing via localhost or 127.0.0.1, use localhost for backend
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
        return 'localhost';
    }
    
    // If accessing via network IP, use the server's network IP
    // Server PC's IP address: 192.168.0.149
    return '192.168.0.149';
};

const ip = getBackendIP();

export default ip;