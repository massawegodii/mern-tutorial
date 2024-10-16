import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch(err) {
         next(err);
    }
};

export const updateHotel = async (req, res, next) => {
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body }, 
            { new: true })
        res.status(200).json(updateHotel)
    } catch(err) {
         next(err);
    }
};


export const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted")
    } catch(err) {
         next(err);
    }
}


export const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch(err) {
         next(err);
    }
}

export const getHotels = async (req, res, next) => {
    try {
        const hotels = await Hotel.find(req.query).limit(req.query.limit)
        res.status(200).json(hotels)
    } catch(err) {
         next(err);
    }
}

export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",").map(city => city.trim()); // Remove extra spaces from each city name

    try {
        const list = await Promise.all(cities.map(city => {
            // Use a regular expression to match city names, ignoring spaces and case
            const cityRegex = new RegExp(city.replace(/\s+/g, "\\s*"), "i");
            return Hotel.countDocuments({ city: cityRegex });
        }));
        
        res.status(200).json(list);
    } catch (err) {
        next(err);
    }
};

export const countByType = async (req, res, next) => {
    try {
      const hotelCount = await Hotel.countDocuments({ type: "hotel" });
      const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
      const resortCount = await Hotel.countDocuments({ type: "resort" });
      const villaCount = await Hotel.countDocuments({ type: "villa" });
      const cabinCount = await Hotel.countDocuments({ type: "cabin" });
  
      res.status(200).json([
        { type: "hotel", count: hotelCount },
        { type: "apartments", count: apartmentCount },
        { type: "resorts", count: resortCount },
        { type: "villas", count: villaCount },
        { type: "cabins", count: cabinCount },
      ]);
    } catch (err) {
      next(err);
    }
  };

