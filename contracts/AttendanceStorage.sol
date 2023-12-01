// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract AttendanceStorage {

    // Define a struct representing each attendace instance
    struct Attendance {
        uint256 id;
        string name;
        string matric;
        string course;
    }

    Attendance[] public records;
    
    function store(Attendance memory data) public {
        records.push(data);
    }


}