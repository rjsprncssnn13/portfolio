function openGallery(category) {
    const modal = document.getElementById('gallery-modal');
    const modalContent = document.getElementById('modal-content');
    
    const projectData = {
        'email': [
            { src: 'works/images/email1.png', caption: 'Your inbox organized with labels and managed email responses.' },
            { src: 'works/images/email2.png', caption: 'Automatic replies set up for your emails when you are unavailable.' },
            { src: 'works/images/email3.png', caption: 'Your emails from specific senders organized with custom labels.' }
        ],
        'calendar': [
            { src: 'works/images/calendar1.png', caption: 'Your meetings and events added to Google Calendar.' },
            { src: 'works/images/calendar2.png', caption: 'Your scheduled meetings and events organized in Google Calendar.' },
            { src: 'works/images/calendar3.png', caption: 'Your calendar adjusted to manage multiple time zones.' },
            { src: 'works/images/calendar5.png', caption: 'Your calendars (personal and business) combined for easier schedule management.' },
            { src: 'works/images/calendar6.png', caption: 'Your personal and business schedules organized in one calendar.' },
            { 
            src: 'works/images/calendar7.png', 
            caption: 'Your Calendly booking page set up with custom availability and connected to Google Calendar, Google Meet, and Zoom for easier scheduling. View my sample booking link <a href="https://calendly.com/princessannierojas1213/virtual-assistant-intro-call-30-minutes-sample-only" target="_blank"><b><u>here</u></b></a>.'
            }        
        ],
        'data': [
            { src: 'works/images/data1.png', caption: 'Your data organized and managed in Google Sheets. View my Google Sheets sample <a href="https://docs.google.com/spreadsheets/d/1WFGKWaNkzP5WfJMxvIIozTQiQmQh1HD1co9imVP3oXw/edit?usp=sharing" target="_blank"><b><u>here</u></b></a>.' },
            { src: 'works/images/data2.png', caption: 'Your leads organized and managed in Trello. View my Trello boards sample <a href="https://trello.com/b/pwFJHYL9/new-york-fitness-coaches-lead-management" target="_blank"><b><u>here</u></b></a>.' },
            { src: 'works/images/data3.png', caption: 'Your leads organized and managed in GoHighLevel CRM.' },
            { src: 'works/images/data4.png', caption: 'Your leads tracked through organized stages in GoHighLevel CRM.' },
            { src: 'works/images/data5.png', caption: 'GoHighLevel workflow setup for automated lead management based on your own process.' },
            { src: 'works/images/data6.png', caption: 'Your website and funnels created and managed in GoHighLevel.' },
            { src: 'works/images/data7.png', caption: 'Your website and funnels created and managed in GoHighLevel.' }
        ],
        'lead': [
            { src: 'works/images/lead1.png', caption: 'Finding your potential leads through LinkedIn search filters.' },
            { src: 'works/images/lead2.png', caption: 'Finding contact information from your potential lead’s LinkedIn profile.' },
            { src: 'works/images/lead3.png', caption: 'Finding your potential leads using Hunter search filters.' },
            { src: 'works/images/lead4.png', caption: 'Your leads organized with detailed contact information in Hunter.' },
            { src: 'works/images/lead5.png', caption: 'Verifying your leads’ email addresses through Hunter.' },
            { src: 'works/images/lead6.png', caption: 'Your lead outreach managed through automated email sequences in Hunter.' },
            { src: 'works/images/lead7.png', caption: 'Your lead outreach managed through automated email sequences in Hunter.' }
        ],
        'file': [
            { src: 'works/images/file1.png', caption: 'Your files organized and managed through Google Drive. View my Google Drive sample <a href="https://drive.google.com/drive/folders/1IbBIHAEEOagJklVz92ETd3UfZ945D9Aj?usp=sharing" target="_blank"><b><u>here</u></b></a>.' },
            { src: 'works/images/file2.png', caption: 'Your file access settings configured for proper sharing and collaboration.' },
            { src: 'works/images/file3.png', caption: 'Your files organized and managed through Dropbox. View my Dropbox sample <a href="https://www.dropbox.com/scl/fo/7vv1tua181if0gfjzzs6w/AInTYP_UTv8lBtRgXuYK0eE?rlkey=azyoxdjbru9dnxmnjycd6okpe&st=evrr8j84&dl=0" target="_blank"><b><u>here</u></b></a>.' },
        ],

        'social': [
            { src: 'works/images/social8.png', caption: 'Your social media posts organized and scheduled in Notion. View my Notion content scheduler sample <a href="https://excited-coneflower-4b3.notion.site/Flex-Fitness-Social-Media-Planner-Go-to-April-2026-in-the-calendar-3239f2381c82802bbfd9c28742673db5" target="_blank"><b><u>here</u></b></a>.' },
            { src: 'works/images/social1.png', caption: 'Your graphics designed and edited using Canva.' },
            { src: 'works/images/social2.png', caption: 'Your graphics designed and edited using Canva.' },
            { src: 'works/images/social3.png', caption: 'Your graphics designed and edited using Canva.' },
            { src: 'works/images/social4.png', caption: 'Your graphics designed and edited using Canva.' },
            { src: 'works/images/social5.png', caption: 'Your graphics designed and edited using Canva.' },
            { src: 'works/images/social6.png', caption: 'Your graphics designed and edited using Canva.' },
            { src: 'works/images/social7.png', caption: 'Your graphics designed and edited using Canva.' }
        ],
    };

    if (projectData[category]) {
        // populate the modal with images and captions
        modalContent.innerHTML = projectData[category].map(item => `
            <div class="space-y-2">
                <img src="${item.src}" class="w-full rounded-none" alt="Gallery image">
                <p class="text-sm text-zinc-600 dark:text-zinc-400 italic">${item.caption}</p>
            </div>
        `).join('');
        
        // Remove hidden class and trigger fade-in animation
        modal.classList.remove('hidden');
        setTimeout(() => modal.classList.add('is-open'), 10);

        // Force scroll to top using a double-frame lock to catch the layout render
        requestAnimationFrame(() => {
            modalContent.scrollTop = 0;
            setTimeout(() => {
                modalContent.scrollTop = 0;
            }, 20);
        });
    }
}

function closeGallery() {
    const modal = document.getElementById('gallery-modal');
    
    // Trigger fade-out animation
    modal.classList.remove('is-open');
    
    // Wait for the transition to finish before adding hidden back
    setTimeout(() => modal.classList.add('hidden'), 200);
}
