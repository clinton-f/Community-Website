const BusinessCard = require('../models/BusinessCardmodel');
const Event = require("../models/Eventmodel");
const Job = require("../models/Jobmodel");
const User = require("../models/Usermodel");
const CMS = require("../models/CMSmodel");
// To test post request
// exports.createBusinessCard = (req, res) => {
//     console.log('Creating business card...');
// }



// req.body refers to the json object sent in the request,
// since it can last a bit use async
exports.createBusinessCard = async(req, res) => {
    try {
        let businessCard;

        //Create business card using the json object body
        businessCard = new BusinessCard(req.body);

        //and for it to wait
        await businessCard.save();
        res.send(businessCard);


    } catch (error) {
        console.log(error);
        res.status(500).send('Server error: Create Business Card');
    }
}

exports.updateBusinessCard = async(req, res) => {
    try {
        const { name, title, email, phone, website, bName, bServ } = req.body;
        let businessCard = await BusinessCard.findById(req.params._id);

        if (!businessCard) {
            res.status(404).json({ msg: 'Business card not found' });
        }

        businessCard.name = name;
        businessCard.title = title;
        businessCard.email = email;
        businessCard.phone = phone;
        businessCard.website = website;
        businessCard.bName = bName;
        businessCard.bServ = bServ;
        //delete businessCard._id;
        //findByIdAndUpdate
        //findOneAndUpdate
        businessCard = await BusinessCard.findOneAndUpdate({ _id: req.params._id }, businessCard, { new: true })
        res.json(businessCard);

    } catch (error) {
        console.log(error);
        res.status(500).send('Server error: Update business card!');
    }
}

exports.deleteBusinessCard = async(req, res) => {
    try {
        let businesscard = await BusinessCard.findById(req.params._id);

        if (!businesscard) {
            res.status(404).json({ msg: 'Business does not exist.' });
        }

        await BusinessCard.findByIdAndDelete(req.params._id);
        res.json({ msg: 'Business card was deleted.' });

    } catch (error) {
        console.log(error);
        res.status(500).send('Server error: Getting business card');
    }
}

exports.getBusinessCard = async(req, res) => {
    try {
        let businessCard = await BusinessCard.findById(req.params._id);

        if (!businessCard) {
            res.status(404).json({ msg: 'Business card not found' });
        }

        res.json(businessCard);

    } catch (error) {
        console.log(error);
        res.status(500).send('Server error: Getting business card');
    }
}

exports.getBusinessCards = async(req, res) => {
    try {
        const businessCards = await BusinessCard.find();
        res.json(businessCards);

    } catch (error) {
        console.log(error);
        res.status(500).send('Server error: Get all business cards');
    }
}


exports.createEvent = async(req, res) => {
    try {
        let event;

        //Create business card using the json object body
        event = new Event(req.body);

        //and for it to wait
        await event.save();
        res.send(event);


    } catch (error) {
        console.log(error);
        res.status(500).send('Server error: Create Event');
    }
}

exports.createJob = async(req, res) => {
    try {
        let job;

        //Create business card using the json object body
        job = new Job(req.body);

        //and for it to wait
        await job.save();
        res.send(job);


    } catch (error) {
        console.log(error);
        res.status(500).send('Server error: Create Job');
    }
}

exports.createUser = async(req, res) => {
    try {
        let user;

        //Create business card using the json object body
        user = new User(req.body);

        //and for it to wait
        await user.save();
        res.send(user);


    } catch (error) {
        console.log(error);
        res.status(500).send('Server error: Create User');
    }
}

exports.createCMS = async(req, res) => {
    try {
        let cms;

        //Create business card using the json object body
        cms = new CMS(req.body);

        //and for it to wait
        await cms.save();
        res.send(cms);


    } catch (error) {
        console.log(error);
        res.status(500).send('Server error: Create CMS');
    }
}

// Get request --This gets called at businesscard.js


exports.getEvents = async(req, res) => {
    try {
        const events = await Event.find();
        res.json(events);

    } catch (error) {
        console.log(error);
        res.status(500).send('Server error: Get all events');
    }
}

exports.getJobs = async(req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);

    } catch (error) {
        console.log(error);
        res.status(500).send('Server error: Get all jobs');
    }
}

exports.getUsers = async(req, res) => {
    try {
        const users = await User.find();
        res.json(users);

    } catch (error) {
        console.log(error);
        res.status(500).send('Server error: Get all users');
    }
}

exports.getCMS = async(req, res) => {
    console.log("Test");
    try {
        const cms = await CMS.find();
        res.json(cms);

    } catch (error) {
        console.log(error);
        res.status(500).send('Server error: Get all users');
    }
}

// Update request ------------------------------------


exports.updateEvent = async(req, res) => {
    try {
        const { eventName, eventDesc, email, creatorName, eventLocation, eventStart, eventEnd } = req.body;
        let event = await Event.findById(req.params._id);

        if (!event) {
            res.status(404).json({ msg: 'Event not found' });
        }

        event.eventName = eventName;
        event.eventDesc = eventDesc;
        event.email = email;
        event.creatorName = creatorName;
        event.eventLocation = eventLocation;
        event.eventStart = eventStart;
        event.eventEnd = eventEnd;

        event = await Event.findByIdAndUpdate({ _id: req.params._id }, event, { new: true })
        res.json(event);

    } catch (error) {
        console.log(error);
        res.status(500).send('Server error: Update event');
    }
}

exports.updateJob = async(req, res) => {
    try {
        const { jobName, jobDesc, email, creatorName, jobLocation, phone } = req.body;
        let job = await Job.findById(req.params._id);

        if (!job) {
            res.status(404).json({ msg: 'Job not found' });
        }

        job.jobName = jobName;
        job.jobDesc = jobDesc;
        job.email = email;
        job.creatorName = creatorName;
        job.jobLocation = jobLocation;
        job.phone = phone;

        job = await Job.findByIdAndUpdate({ _id: req.params._id }, job, { new: true })
        res.json(job);

    } catch (error) {
        console.log(error);
        res.status(500).send('Server error: Update job');
    }
}


exports.updateUser = async(req, res) => {
    try {
        const { name, address, email, phone, password } = req.body;
        let user = await User.findById(req.params._id);

        if (!user) {
            res.status(404).json({ msg: 'User not found' });
        }

        user.name = name;
        user.address = address;
        user.email = email;
        user.phone = phone;
        user.password = password;

        user = await User.findByIdAndUpdate({ _id: req.params._id }, user, { new: true })
        res.json(user);

    } catch (error) {
        console.log(error);
        res.status(500).send('Server error: Update user');
    }
}

exports.updateCMS = async(req, res) => {
    try {
        const { intro, sitedesc, imgdesc } = req.body;
        let cms = await CMS.findById(req.params._id);

        if (!cms) {
            res.status(404).json({ msg: 'User not found' });
        }

        cms.intro = intro;
        cms.sitedesc = sitedesc;
        cms.imgdesc = imgdesc;

        cms = await CMS.findByIdAndUpdate({ _id: req.params._id }, cms, { new: true })
        res.json(cms);

    } catch (error) {
        console.log(error);
        res.status(500).send('Server error: Update cms');
    }
}

//_____________Get by id______________________


exports.getEvent = async(req, res) => {
    try {
        let event = await Event.findById(req.params._id);

        if (!event) {
            res.status(404).json({ msg: 'Event not found' });
        }

        res.json(event);

    } catch (error) {
        console.log(error);
        res.status(500).send('Server error: Getting event');
    }
}

exports.getJob = async(req, res) => {
    try {
        let job = await Job.findById(req.params._id);

        if (!job) {
            res.status(404).json({ msg: 'Job not found' });
        }

        res.json(job);

    } catch (error) {
        console.log(error);
        res.status(500).send('Server error: Getting job');
    }
}

exports.getUser = async(req, res) => {
    try {
        let user = await User.findById(req.params._id);

        if (!user) {
            res.status(404).json({ msg: 'User not found' });
        }

        res.json(user);

    } catch (error) {
        console.log(error);
        res.status(500).send('Server error: Getting user');
    }
}

// ______________Delete______________________


exports.deleteEvent = async(req, res) => {
    try {
        let event = await Event.findById(req.params._id);

        if (!event) {
            res.status(404).json({ msg: 'Event does not exist.' });
        }

        await Event.findByIdAndDelete(req.params._id);
        res.json({ msg: 'Event was deleted.' });

    } catch (error) {
        console.log(error);
        res.status(500).send('Server error: Getting event');
    }
}

exports.deleteJob = async(req, res) => {
    try {
        let job = await Job.findById(req.params._id);

        if (!job) {
            res.status(404).json({ msg: 'Job does not exist.' });
        }

        await Job.findByIdAndDelete(req.params._id);
        res.json({ msg: 'Job was deleted.' });

    } catch (error) {
        console.log(error);
        res.status(500).send('Server error: Getting job');
    }
}

exports.deleteUser = async(req, res) => {
    try {
        let user = await User.findById(req.params._id);

        if (!user) {
            res.status(404).json({ msg: 'User does not exist.' });
        }

        await User.findByIdAndDelete(req.params._id);
        res.json({ msg: 'User was deleted.' });

    } catch (error) {
        console.log(error);
        res.status(500).send('Server error: Getting user');
    }
}
