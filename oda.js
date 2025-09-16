// oda.js
// All ODA data logic and visualizations will go here.

function initODASection() {
    const odaSection = document.getElementById('oda-content');
    odaSection.innerHTML = `
        <div style="display: flex; gap: 2rem; align-items: flex-start; min-height: 500px;">
            <nav id="oda-year-nav" style="min-width: 120px;">
                <ul style="list-style:none; padding:0; margin:0;">
                    <!-- Years will be injected here -->
                </ul>
            </nav>
            <div style="flex:1;">
                <table id="oda-table" style="width:100%; border-collapse:collapse; background:#fff; box-shadow:0 2px 8px #0001; border-radius:8px; overflow:hidden;">
                    <thead style="background:#F2F2F0;">
                        <tr>
                            <th style="padding:0.7em 0.5em; text-align:left;">Country</th>
                            <th style="padding:0.7em 0.5em; text-align:left;">Organization</th>
                            <th style="padding:0.7em 0.5em; text-align:left;">ODA Type</th>
                            <th style="padding:0.7em 0.5em; text-align:right;">Amount</th>
                            <th style="padding:0.7em 0.5em; text-align:right;">Interest Rate</th>
                            <th style="padding:0.7em 0.5em; text-align:left;">Purpose Code</th>
                            <th style="padding:0.7em 0.5em; text-align:left;">SDG Focus</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td colspan="7" style="text-align:center; color:#aaa; padding:2em;">Select a year to view ODA data.</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
    renderYearNav();
}

function renderYearNav() {
    // Years from 2025 down to 2010
    const years = [];
    for (let y = 2025; y >= 2010; y--) years.push(y);
    const nav = document.querySelector('#oda-year-nav ul');
    nav.innerHTML = years.map(year => `
        <li><a href="#" class="oda-year-link" data-year="${year}" style="display:block;padding:0.6em 0.5em;color:#009EDB;font-weight:600;text-decoration:none;border-radius:4px;margin-bottom:0.2em;transition:background 0.2s;">${year}</a></li>
    `).join('');
    // Highlight and click handler
    nav.querySelectorAll('.oda-year-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            nav.querySelectorAll('.oda-year-link').forEach(l => l.style.background = 'none');
            this.style.background = '#e6f6fb';
            renderODATable(this.dataset.year);
        });
    });
}

function renderODATable(year) {
    const tbody = document.querySelector('#oda-table tbody');
    // Placeholder: Show year selected, no data yet
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:#009EDB; padding:2em;">ODA data for <b>${year}</b> will appear here.</td></tr>`;
}

// Only run if ODA page is active on load
if (window.location.hash.replace('#','') === 'oda') {
    document.addEventListener('DOMContentLoaded', initODASection);
}
// Also run when navigating to ODA page
window.addEventListener('hashchange', function() {
    if (window.location.hash.replace('#','') === 'oda') {
        initODASection();
    }
});
