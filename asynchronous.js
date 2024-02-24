//Asynchronous

//1. Aysnchronous là gì?
//Asynchronous là 1 loại hành động không đồng bộ
//Asynchronous là 1 cách để chạy nhiều tác vụ cùng 1 lúc
//Asynchronous không chờ đợi cho đến khi tác vụ trước đó hoàn thành
//Asynchronous không chặn tác vụ khác
//Asynchronous làm cho ứng dụng trở nên nhanh hơn
//Asynchronous giúp tránh callback hell

//1. Timeout and Interval
//Timeout và Interval là 2 cách để thực hiện hành động không đồng bộ
//Timeout sẽ thực hiện 1 hành động sau 1 khoảng thời gian nhất định
//Interval sẽ thực hiện 1 hành động sau mỗi khoảng thời gian nhất định
//Timeout và Interval sẽ thực hiện hành động không đồng bộ

//ví dụ về Timeout và Interval
setTimeout(() => {
    console.log('Hello');
}, 2000);
setInterval(() => {
    console.log('Hello');
}, 2000);


//2. Callback
//Callback là 1 hàm được truyền dưới dạng đối số cho 1 hàm khác
//Callback là 1 hàm được gọi sau khi 1 hàm khác hoàn thành
//Callback là 1 cách để thực hiện hành động không đồng bộ
//Callback là 1 cách để trì hoãn việc thực thi của 1 hàm cho đến khi 1 thời gian hoặc 1 sự kiện cụ thể xảy ra

//ví dụ về callback
function greet(name) {
    console.log(`Hello ${name}`);
}

function greetFEClass(fn) {
    const className = "VTI FE 2043";
    fn(className);
}

greetFEClass(greet);

//3. Promise
//Promise là 1 cách khác để xử lý code bất đồng bộ
//Promise giúp viết code bất đồng bộ dễ dàng hơn thay vì sử dụng callback
//Promise có 3 trạng thái: pending, fulfilled, rejected
//Promise có 2 phương thức then() và catch()
//then() sẽ được gọi khi promise hoàn thành thành công
//catch() sẽ được gọi khi promise bị từ chối
//Promise chain là 1 cách để gọi nhiều phương thức then() liên tiếp
//Promise.finally() là 1 phương thức để thực hiện 1 hành động cuối cùng sau khi promise hoàn thành hoặc bị từ chối
//Promise.all() là 1 phương thức để chạy nhiều promise cùng 1 lúc và chờ cho tất cả promise hoàn thành

//ví dụ về promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Thành công');
    }, 2000);
});

promise.then((value) => {
    console.log(value);
});

//4. Async/Await
//Async/Await là 1 cách khác để xử lý code bất đồng bộ
//Async/Await giúp viết code bất đồng bộ dễ dàng hơn thay vì sử dụng promise
//Async/Await giúp viết code bất đồng bộ trở nên dễ đọc và dễ hiểu hơn
//Async/Await giúp tránh callback hell
//Async/Await giúp viết code bất đồng bộ trở nên dễ bảo trì hơn

//ví dụ về async/await
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

//5. Event Loop
//Event Loop là 1 cơ chế để xử lý code không đồng bộ
//Event Loop giúp chạy nhiều tác vụ cùng 1 lúc
//Event Loop giúp chạy tác vụ không chờ đợi tác vụ khác
//Event Loop giúp ứng dụng trở nên nhanh hơn
//Event Loop giúp tránh callback hell

//ví dụ về Event Loop
console.log('Hi');
setTimeout(() => {
    console.log('Hello');
}, 0);
console.log('Bye');


