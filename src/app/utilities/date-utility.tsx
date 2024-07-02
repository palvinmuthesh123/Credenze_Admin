export const getDateMonthYear = (dateObj: any) => {
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0"); // pad month with leading zero if necessary
  const day = dateObj.getDate().toString().padStart(2, "0"); // pad day with leading zero if necessary
  const year = dateObj.getFullYear();
  return `${year}-${month}-${day}`;
};

export const getDateTimeArrayIn24Format = () => {
  const timeArray = [];

  for (let hour = 0; hour <= 23; hour++) {
    for (let minute = 0; minute <= 30; minute += 30) {
      const hourStr = hour.toString().padStart(2, "0");
      const minuteStr = minute.toString().padStart(2, "0");
      const timeString = `${hourStr}:${minuteStr}`;
      timeArray.push(timeString);
    }
  }
  return timeArray;
};

export function formatDate(individualOffer: any) {
  if (individualOffer) {
    const formattedDate = new Date(individualOffer)
      .toLocaleDateString("en-GB", {
        timeZone: "UTC",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .split("/")
      .join("-");

    return formattedDate;
  } else {
    return "NA";
  }
}
export function formatDateWithSlash(individualOffer: any) {
  if (individualOffer) {
    const formattedDate = new Date(individualOffer)
      .toLocaleDateString("en-GB", {
        timeZone: "UTC",
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      })
      .split("/")
      .join("/");

    return formattedDate;
  } else {
    return "NA";
  }
}

export const capitalizeFirstLetter = (str: any) => {
  return str?.length ? str?.charAt(0)?.toUpperCase() + str.slice(1) : "";
};

export const FormatTime = (timeFormat: any) => {
  const timestamp = new Date(timeFormat);

  // Convert to IST (UTC+5:30)
  const istTimestamp = new Date(timestamp.getTime() + 5.5 * 60 * 60 * 1000);

  const hours = istTimestamp.getUTCHours();
  const minutes = istTimestamp.getUTCMinutes();
  const period = hours >= 12 ? "PM" : "AM";

  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const time = `${formattedHours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${period}`;

  return time;
};

export function EpochFormatDate(timestamp: any) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  const formattedDate = `${day} ${month} ${year}`;
  return formattedDate;
}

export function EpochFormatTime(timestamp: any) {
  const date = new Date(timestamp);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const formattedTime = `${hours}:${minutes}`;
  return formattedTime;
}

export function ConvertToEpochAndAddOneDay(dateString: any) {
  const tomorrowDate = new Date(dateString);
  tomorrowDate.setDate(tomorrowDate.getDate() + 1); // Add one day for tomorrow
  const epochTime = tomorrowDate.getTime();
  return epochTime;
}
export function ConvertToEpoch(dateString: any) {
  const epochTime = new Date(dateString).getTime();
  return epochTime;
}

// export function UTCformatDate(dateTimeString: any) {
//   const options = {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//     hour12: false,
//   };
//   return new Intl.DateTimeFormat("en-US", options).format(
//     new Date(dateTimeString)
//   );
// }

// export function UTCformatOnlyDate(dateTimeString: any) {
//   const options = {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   };

//   return new Intl.DateTimeFormat("en-US", options)
//     .format(new Date(dateTimeString))
//     .replace(" ", "");
// }

export function convertTo12HourFormat(time24Hour: any) {
  const [hours, minutes] = time24Hour.split(":");
  let period = "AM";
  let formattedHours = parseInt(hours);

  if (formattedHours >= 12) {
    period = "PM";
    if (formattedHours > 12) {
      formattedHours -= 12;
    }
  } else if (formattedHours === 0) {
    formattedHours = 12;
  }

  return `${formattedHours}:${minutes} ${period}`;
}

export const extractTimeIn24HoursFormat = (timestamp: any) => {
  const dateUTC = new Date(timestamp);

  // Convert UTC to IST using toLocaleString with options
  const timeIST = dateUTC.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });

  return timeIST;
};
