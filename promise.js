//promise đơn giản là 1 đối tượng trong js, nó đại diện cho 1 giá trị chưa được xác định tại thời điểm tạo ra promise
//promise có 3 trạng thái: pending, fulfilled, rejected
// (1) pending: trạng thái ban đầu khi tạo ra promise, nó chưa hoàn thành và chưa bị từ chối
// (2) fulfilled: trạng thái khi promise hoàn thành thành công
// (3) rejected: trạng thái khi promise bị từ chối
//promise có 2 phương thức then() và catch()
// (1) then(): nó sẽ được gọi khi promise hoàn thành thành công
// (2) catch(): nó sẽ được gọi khi promise bị từ chối

//1. Tạo ra 1 promise

//const promise = new Promise();

//2. Cách để hoàn thành hoặc từ chối promise
/*
const promise = new Promise((resolve, reject) => {
    //giải quyết và từ chối promise là những hàm callback
    if(true){
        resolve('Thành công');
    }
    else{
        reject('Thất bại');
    }
});
*/


//Sao chép với async
/*
const resolvedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Thành công');
    }, 2000);
});

const rejectedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Thất bại');
    }, 2000);
});

resolvedPromise.then(()=> {
    console.log('Thành công');
});

rejectedPromise.catch(()=> {
    console.log('Thất bại');
});
*/

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = {id: 3, name: 'promise3'};
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Thành công');
    }, 2000);
});

const data = Promise.all([promise1, promise2, promise3, promise4]).then(
    (values) => {
        console.log(values);
    }   
)

//promise.all() sẽ trả về 1 promise mới, nó sẽ hoàn thành khi tất cả các promise con hoàn thành
//nó sẽ từ chối khi 1 trong các promise con bị từ chối
//promise.all() sẽ trả về 1 mảng chứa kết quả của các promise con

//summary for interview

//promise là gì

//promise là 1 cách khác để xử lý code bất đồng bộ
//nó giúp chúng ta viết code bất đồng bộ dễ dàng hơn thay vì sử dụng callback
//promise có 3 trạng thái: pending, fulfilled, rejected
//promise có 2 phương thức then() và catch()
//then() sẽ được gọi khi promise hoàn thành thành công
//catch() sẽ được gọi khi promise bị từ chối
//đưa ra 1 ví dụ để chứng minh promise
//ví dụ:
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Thành công');
//     }, 2000);
// });
// promise.then((value) => {
//     console.log(value);
// });
//kq sẽ là Thành công

//promise chain là gì
//promise chain là 1 cách để gọi nhiều phương thức then() liên tiếp
//ví dụ:
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1);
//     }, 2000);
// });
// promise.then((value) => {
//     console.log(value);
//     return value * 2;
// }).then((value) => {
//     console.log(value);
//     return value * 2;
// }).then((value) => {
//     console.log(value);
// });
//kq sẽ là 1, 2, 4

//promise.finaly() là gì
//promise.finaly() là 1 phương thức để thực hiện 1 hành động cuối cùng sau khi promise hoàn thành hoặc bị từ chối
//ví dụ:
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Thành công');
//     }, 2000);
// });
// promise.then((value) => {
//     console.log(value);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log('Kết thúc');
// });
//kq sẽ là Thành công, Kết thúc










