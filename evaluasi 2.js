// 1. Buatlah function expression yang bertugas untuk menambahkan data diatas
const user = [
    {
        id: 1,
        username: 'JohnDoe',
        email: 'johndoe@gmail.com',
        hoby: 'coding'
    },
    {
        id: 2,
        username: 'ExKoi',
        email: 'exkoi01@gmail.com',
        hoby: 'gaming'
    }
]
user.push({
    id: 3,
    username: "test",
    email: "test@gmail.com",
    hoby: "reading"
})
console.log(user)


// 2. Tambahkan properti role dengan value 'user' pada objek dari data array diatas
// clue: Gunakanlah method map()
const tambah = user.map (function (a) {
    a.role = "user"
    return a
})
console.log(tambah)


// 3, Diketahui sebuah segitiga memiliku alas 4 dan tinggi 3, buatlah function yang bertugas untuk menghitung luas segitiga
// note Rumus Luas Segetiga = 1/2 X alas X tinggi atau (alas X tinggi) / 2

function segitiga(a, b) {
    return a * b / 2
}
console.log(segitiga(4, 3))

//4. Tukar nilai data dari variabel yang tersedia
function test() {
    let a = 1
    let b = 2

    console.log('a awal = ', a);
    console.log('b awal = ', b);

    console.log('a final = ', b);
    console.log('b final = ', a);
}
test()


// 5. Buatlah fungsi untuk melakukan pengecekan terhadap sebuah string bernilai palindrome atau tidak.
// note: Palindrome adalah kata, frasa, angka, atau urutan karakter yang dapat dibaca sama dari depan maupun belakang. Contoh yang paling sederhana adalah kata "malam" atau "level"
function ujian() {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
    }
}

