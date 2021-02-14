module.exports = mongoose => {
  let schema = mongoose.Schema(
    {
      isRainy: Boolean,
      picture: String,
      temperature: Number,
      city: String,
      latitude: String,
      longitude: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  const Collection = mongoose.model("weather", schema);  /* weather should be the same name of your database collection but just single not plural*/
  return Collection;
};
