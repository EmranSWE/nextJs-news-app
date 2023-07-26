import React from "react";
import { useForm } from "react-hook-form";

const CreateNews = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    fetch("/api/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("News posted successfully!");
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register("id")} />

      <div>
        <label>Author Name</label>
        <input {...register("authorName", { required: true })} />
        {errors.authorName && <p>This field is required</p>}
      </div>

      <div>
        <label>News</label>
        <textarea {...register("news", { required: true })} />
        {errors.news && <p>This field is required</p>}
      </div>

      <div>
        <label>Category</label>
        <select {...register("category", { required: true })}>
          <option value="">Select...</option>
          <option value="Politics">Politics</option>
          <option value="Sports">Sports</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        {errors.category && <p>Please select a category</p>}
      </div>

      <input type="submit" />
    </form>
  );
};

export default CreateNews;
