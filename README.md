# Installation

## Installing the React App
To run the react app, we need [node.js](https://nodejs.org/en/ "node.js") installed.
Skip if installed.

After cloning the repository, head over to

`repo_name/client/`

and open powershell or terminal and execute the command below to install the dependencies

`npm install`

and then run the command

`npm start`

This should start the React app.
**Do not close the powershell or terminal when you are running the app**

##Installing the Backend APIs

Navigate to

`repo_name/server/`

install the dependencies for the backend too using terminal or powershell

`npm install`

and then execute the command

`node index.js`

to run the backend server which should handle all the CRUD operations.
**Do not close the powershell or terminal when you are running the app**

##Configuring the database

###Installing MySQL

To do it the easier way, we are going to use MySQL through [MySQL Installer](https://downloads.mysql.com/archives/installer/ "MySQL Installer").
Detailed steps are attached below:

[![First Step](https://cdn.discordapp.com/attachments/447677875202686976/844624411164016730/MySQLInstaller_Sk89bsig4W.png "First Step")](https://cdn.discordapp.com/attachments/447677875202686976/844624411164016730/MySQLInstaller_Sk89bsig4W.png "First Step")

[![Second Step](https://media.discordapp.net/attachments/447677875202686976/844624412320858122/MySQLInstaller_U62Wisd1M7.png "Second Step")](https://media.discordapp.net/attachments/447677875202686976/844624412320858122/MySQLInstaller_U62Wisd1M7.png "Second Step")

[![Third Step](https://media.discordapp.net/attachments/447677875202686976/844624414112612443/MySQLInstaller_WMZCiCyx1o.png "Third Step")](https://media.discordapp.net/attachments/447677875202686976/844624414112612443/MySQLInstaller_WMZCiCyx1o.png "Third Step")

Remember this password since we will be using it later.

[![Fourth Step](https://media.discordapp.net/attachments/447677875202686976/844624415504203786/MySQLInstaller_Awd2lQrCO8.png "Fourth Step")](https://media.discordapp.net/attachments/447677875202686976/844624415504203786/MySQLInstaller_Awd2lQrCO8.png "Fourth Step")

[![Fifth Step](https://media.discordapp.net/attachments/447677875202686976/844624417224392744/MySQLInstaller_pJ6vqEB6R6.png "Fifth Step")](https://media.discordapp.net/attachments/447677875202686976/844624417224392744/MySQLInstaller_pJ6vqEB6R6.png "Fifth Step")

[![Sixth Step](https://media.discordapp.net/attachments/447677875202686976/844624418596454450/MySQLInstaller_rKLPHWYI7B.png "Sixth Step")](https://media.discordapp.net/attachments/447677875202686976/844624418596454450/MySQLInstaller_rKLPHWYI7B.png "Sixth Step")

###Configuring the database and the table

To make this process simpler, we will be using [MySQL Workbench](https://dev.mysql.com/downloads/workbench/ "MySQL Workbench") which is a GUI for MySQL.

After it is installed, you should see a window with the highlighted the option

[![Database_1](https://media.discordapp.net/attachments/623530791967784970/844629174680813578/unknown.png "Database_1")](http://https://media.discordapp.net/attachments/623530791967784970/844629174680813578/unknown.png "Database_1")

Double click on the highlighted database and then go to the pointed location below

[![Database_2](https://media.discordapp.net/attachments/623530791967784970/844630012962668614/unknown.png "Database_2")](https://media.discordapp.net/attachments/623530791967784970/844630012962668614/unknown.png "Database_2")

Give it the name

`results`

And set it as default so we can run SQL commands and the commands apply to that database.

[![Database_3](https://media.discordapp.net/attachments/623530791967784970/844630602710777866/unknown.png "Database_3")](https://media.discordapp.net/attachments/623530791967784970/844630602710777866/unknown.png?width=852&height=683 "Database_3")

Press CTRL + T to open a new query tab and paste the code below

```sql
CREATE TABLE `records` (
  `roll` int NOT NULL,
  `name` text,
  `math` float unsigned DEFAULT NULL,
  `phy` float unsigned DEFAULT NULL,
  `chem` float unsigned DEFAULT NULL,
  `total` float DEFAULT NULL,
  `percent` float DEFAULT NULL,
  PRIMARY KEY (`roll`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
recordsrecords
```

With that, we are done with the database. Now to move forward, we need to change some values in our `index.js` in `repo_name/server/index.js`

[![index_Changes](https://media.discordapp.net/attachments/623530791967784970/844633428985118720/unknown.png "index_Changes")](https://media.discordapp.net/attachments/623530791967784970/844633428985118720/unknown.png "index_Changes")

Replace the rootpassword with the password you selected while creating the MySQL database.

And with that, the app should be ready.



# Features

First page should be the Home Page with the buttons "ENTER MARKS" and "VIEW LEADERBOARDS" with a navigation bar with the same options.

[![Homepage](https://media.discordapp.net/attachments/623530791967784970/844634632820752394/unknown.png "Homepage")](https://media.discordapp.net/attachments/623530791967784970/844634632820752394/unknown.png "Homepage")

Enter Marks page should take you to this

[![Marks](https://media.discordapp.net/attachments/623530791967784970/844636613208440842/unknown.png "Marks")](https://media.discordapp.net/attachments/623530791967784970/844636613208440842/unknown.png "Marks")

To add a record, enter data in all the fields and enter the submit button. The page should refresh automatically. To see the records, go to "View Leaderboards".
If you don't see any records there, refresh the page.

[![Leaderboards](https://media.discordapp.net/attachments/623530791967784970/844637443156475924/unknown.png "Leaderboards")](https://media.discordapp.net/attachments/623530791967784970/844637443156475924/unknown.png "Leaderboards")

You can add update the name here after typing the new name in the input field and pressing the button "Update" beside it.
While the "Delete" button deletes the record.