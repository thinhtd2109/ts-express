import request from 'supertest';
import {App} from '../app'

const app = new App().app; // Khởi tạo instance của app

describe('POST /api/users', () => {
  it('should create a new user and return 201 status', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({ name: 'Alice' }) // Dữ liệu gửi đi
      .set('Accept', 'application/json');

    expect(response.status).toBe(201); // Kiểm tra mã trạng thái HTTP
    expect(response.body).toHaveProperty('success', true); // Kiểm tra nếu response có thuộc tính success
    expect(response.body.data).toHaveProperty('id'); // Kiểm tra xem có id trong dữ liệu trả về
    expect(response.body.data.name).toBe('Alice'); // Kiểm tra tên người dùng
  });

  it('should return 400 if name is missing', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({}) // Gửi request mà không có name 
      .set('Accept', 'application/json');

    expect(response.status).toBe(400); // Kiểm tra mã trạng thái HTTP
    expect(response.body).toHaveProperty('success', false); // Kiểm tra nếu success là false
    expect(response.body).toHaveProperty('message', 'User name is required'); // Kiểm tra thông báo lỗi
  });
});
