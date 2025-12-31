import React from "react";
import { useState } from "react";
import { baseBookUrl } from "../src/axios";
import { useEffect } from "react";
const Home = () => {
  const [bookForm, setBookForm] = useState({
    BookName: "",
    BookTitle: "",
    BookAuthor: "",
    SellingPrice: "",
    PublishDate: "",
    Id:""
  });

  const [booklist, setBooklist] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);

  const getAllBookList = async () => {
    try {
      const { data } = await baseBookUrl.get("/book/booklists");
      setBooklist(data?.BookList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBookList();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async () => {
    try {
      if (!isUpdating) {
        if (
          !bookForm.BookName ||
          !bookForm.BookTitle ||
          !bookForm.BookAuthor ||
          !bookForm.SellingPrice ||
          !bookForm.PublishDate
        ) {
          alert("All fileds are required");
        }
        const { data } = await baseBookUrl.post("/book/addbook", bookForm);
        if (data?.Success) {
          getAllBookList();
          console.log("Data created successfully");
          setBookForm({
            BookName: "",
            BookTitle: "",
            BookAuthor: "",
            SellingPrice: "",
            PublishDate: "",
            Id:""
          });
        }
      } else {
        const { data } = await baseBookUrl.put("/book/updatebook", bookForm);
        if (data?.Success) {
          getAllBookList();
          console.log("Data created successfully");
          setBookForm({
            BookName: "",
            BookTitle: "",
            BookAuthor: "",
            SellingPrice: "",
            PublishDate: "",
            Id:""
          });
          setIsUpdating(false);
        }
      }
      console.log(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const { data } = await baseBookUrl.post("/book/deletebook",{ Id: id });
      if (data?.Success) {
        getAllBookList();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdate = async (data) => {
    setBookForm({
      BookName: data.BookName,
      BookTitle: data.BookTitle,
      BookAuthor: data.BookAuthor,
      SellingPrice: data.SellingPrice,
      PublishDate: data.PublishDate,
      Id:data._id
    });
    setIsUpdating(true);
  };
  return (
    <div className="w-full h-screen ">
      <div className="w-full bg-blue-300">
        <h1 className=" text-3xl text-center font-semibold p-6">
          CRUD Operation Using MERN
        </h1>
      </div>
      <div>
        <div className="w-full flex justify-center items-center gap-4">
          <div className="flex flex-col gap-1 p-4 w-1/5">
            <label htmlFor="" className="px-2">
              Book Name
            </label>
            <input
              type="text"
              placeholder="Book Name"
              className="border-2 border-gray-400 rounded px-2"
              name="BookName"
              value={bookForm.BookName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1 p-4 w-1/5">
            <label htmlFor="" className="px-2">
              Book Title
            </label>
            <input
              type="text"
              placeholder="Book Title"
              className="border-2 border-gray-400 rounded px-2"
              name="BookTitle"
              value={bookForm.BookTitle}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1 p-4 w-1/5">
            <label htmlFor="" className="px-2">
              Book Author
            </label>
            <input
              type="text"
              placeholder="Book Author"
              className="border-2 border-gray-400 rounded px-2"
              name="BookAuthor"
              value={bookForm.BookAuthor}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1 p-4 w-1/5">
            <label htmlFor="" className="px-2">
              Selling Price
            </label>
            <input
              type="number"
              placeholder="Selling Price"
              className="border-2 border-gray-400 rounded px-2"
              name="SellingPrice"
              value={bookForm.SellingPrice}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1 p-4 w-1/5">
            <label htmlFor="" className="px-2">
              Publish Date
            </label>
            <input
              type="number"
              className="border-2 border-gray-400 rounded px-2"
              name="PublishDate"
              value={bookForm.PublishDate}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-full mt-2 px-4">
          <button
            onClick={handleFormSubmit}
            className=" w-full px-4 py-1 text-xl font-semibold rounded bg-blue-500"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="px-4">
      <table className="w-full mt-4 border border-collapse border-gray-400 text-center px-2">
        <thead className="bg-gray-200 ">
          <tr>
            <th className="border border-gray-400 py-2  px-4 text-left ">
              Book Name
            </th>
            <th className="border border-gray-400 py-2  px-4 text-left ">
              Book Title
            </th>
            <th className="border border-gray-400 py-2  px-4 text-left ">
              Book Author
            </th>
            <th className="border border-gray-400 py-2  px-4 text-left ">
              Selling Price
            </th>
            <th className="border border-gray-400 py-2  px-4 text-left ">
              Publish Date
            </th>
            <th className="border border-gray-400 py-2  px-4 text-left ">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {booklist.map((book, idx) => {
            return (
              <tr key={idx}>
                <td className="border border-gray-400 py-2  px-4 text-left ">
                  {book.BookName}
                </td>
                <td className="border border-gray-400 py-2  px-4 text-left ">
                  {book.BookTitle}
                </td>
                <td className="border border-gray-400 py-2  px-4 text-left ">
                  {book.BookAuthor}
                </td>
                <td className="border border-gray-400 py-2  px-4 text-left ">
                  {book.SellingPrice}
                </td>
                <td className="border border-gray-400 py-2  px-4 text-left ">
                  {book.PublishDate}
                </td>
                <td className="border border-gray-400 py-2  px-4 text-left flex justify-evenly ">
                  <button
                    onClick={() => handleUpdate(book)}
                    className="bg-green-500 px-2 py-1 text-white rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="bg-red-500 px-2 py-1 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
      
    </div>
  );
};

export default Home;
