import React from 'react';
import Image from 'next/image';

interface UserData {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    city: string;
    state: string;
    country: string;
  };
  email: string;
  phone: string;
  picture: {
    large: string;
  };
}

const TeamsPage = () => {
  const teamMembers: UserData[] = [
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Jennie",
        last: "black pink"
      },
      location: {
        city: "depok",
        state: "Margonda",
        country: "United States"
      },
      email: "jennie.nichols@example.com",
      phone: "(272) 790-0888",
      picture: {
        large: "https://randomuser.me/api/portraits/women/75.jpg"
      }
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Tama",
        last: "Doe"
      },
      location: {
        city: "cisauk",
        state: "bsd ujung",
        country: "United States"
      },
      email: "john.doe@example.com",
      phone: "(123) 456-7890",
      picture: {
        large: "https://randomuser.me/api/portraits/men/75.jpg"
      }
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Jane",
        last: "Smith"
      },
      location: {
        city: "Los Angeles",
        state: "California",
        country: "United States"
      },
      email: "jane.smith@example.com",
      phone: "(987) 654-3210",
      picture: {
        large: "https://randomuser.me/api/portraits/women/76.jpg"
      }
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Maman",
        last: "Johnson"
      },
      location: {
        city: "Bandung",
        state: "Baleendah",
        country: "United States"
      },
      email: "michael.johnson@example.com",
      phone: "(111) 222-3333",
      picture: {
        large: "https://randomuser.me/api/portraits/men/76.jpg"
      }
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Emily",
        last: "Brown"
      },
      location: {
        city: "Houston",
        state: "Texas",
        country: "United States"
      },
      email: "emily.brown@example.com",
      phone: "(444) 555-6666",
      picture: {
        large: "https://randomuser.me/api/portraits/women/77.jpg"
      }
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "William",
        last: "Wilson"
      },
      location: {
        city: "Phoenix",
        state: "Arizona",
        country: "United States"
      },
      email: "william.wilson@example.com",
      phone: "(777) 888-9999",
      picture: {
        large: "https://randomuser.me/api/portraits/men/77.jpg"
      }
    }
  ];

  return (
    <div className="pt-11 bg-orange-100 mb-9">
      <h1 className="text-3xl font-bold mb-4 text-center">Team Members</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-amber-900 p-4 rounded-lg shadow-md w-full">
              <div className="relative h-40 w-40 overflow-hidden rounded-full mb-4 flex justify-center">
                <Image
                  src={member.picture.large}
                  alt={`${member.name.title} ${member.name.first} ${member.name.last}`}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center center" // Tambahkan properti objectPosition di sini
                />
              </div>
              <h2 className="text-xl font-semibold mb-1 text-center">{`${member.name.title} ${member.name.first} ${member.name.last}`}</h2>
              <p className="text-white mb-1 text-center">Email: {member.email}</p>
              <p className="text-white mb-1 text-center">Phone: {member.phone}</p>
              <p className="text-white mb-1 text-center">Location: {member.location.city}, {member.location.state}, {member.location.country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;
