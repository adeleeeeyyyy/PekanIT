// Tambahkan konfigurasi Firebase Anda di sini
var firebaseConfig = {
  apiKey: 'AIzaSyBvDK5PmiUTvSwYWN9yzwTY1D8EM-rAllA',
  authDomain: 'pekan-it-424ff.firebaseapp.com',
  projectId: 'pekan-it-424ff',
  storageBucket: 'pekan-it-424ff.appspot.com',
  messagingSenderId: '475519408249',
  appId: '1:475519408249:web:b0d7d022e600d0cb4d9ca8',
  measurementId: 'G-0D5HTT3LM0',
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);

// Referensi ke database Firebase
var database = firebase.database();

// Fungsi untuk mendapatkan data secara realtime dari Firebase
function getData() {
  var dataRef = database.ref('data/');
  dataRef.on('value', (snapshot) => {
    const data = snapshot.val();
    document.getElementById('data').innerHTML = JSON.stringify(data, null, 2);
  });
}

// Fungsi untuk menambah data ke Firebase
function addData() {
  var dataRef = database.ref('data/');
  dataRef.set({
    name: 'John Doe',
    email: 'johndoe@example.com',
  });
}

// Panggil fungsi addData untuk menambah data ke Firebase
addData();

// Panggil fungsi getData untuk menampilkan data secara realtime
getData();
