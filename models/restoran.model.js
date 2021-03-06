module.exports = mongoose => {
    const Restoran = mongoose.model(
      "restoran",
      mongoose.Schema(
        {
          naziv: String,
          opis: String,
          grad: String,
          mjesto: String,
          lokacija: String,
          telefon: Number,
          muzika: Boolean,
          crveno_meso: String,
          janjetina: String,
          piletina: String,
        },
        { timestamps: true }
      )
    );
  
    return Restoran;
  };