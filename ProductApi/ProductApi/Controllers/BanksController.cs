﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductApi.Data;
using ProductApi.Models;

namespace ProductApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BanksController : ControllerBase
    {
        private readonly ProductApiContext _context;

        public BanksController(ProductApiContext context)
        {
            _context = context;
        }

        // GET: api/Banks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bank>>> GetBank()
        {
          if (_context.Bank == null)
          {
              return NotFound();
          }
            return await _context.Bank.ToListAsync();
        }

        // GET: api/Banks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Bank>> GetBank(int id)
        {
          if (_context.Bank == null)
          {
              return NotFound();
          }
            var bank = await _context.Bank.FindAsync(id);

            if (bank == null)
            {
                return NotFound();
            }

            return bank;
        }

        // PUT: api/Banks/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBank(int id, Bank bank)
        {
            if (id != bank.Id)
            {
                return BadRequest();
            }

            _context.Entry(bank).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BankExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Banks
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Bank>> PostBank(Bank bank)
        {
          if (_context.Bank == null)
          {
              return Problem("Entity set 'ProductApiContext.Bank'  is null.");
          }
            _context.Bank.Add(bank);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBank", new { id = bank.Id }, bank);
        }

        // DELETE: api/Banks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBank(int id)
        {
            if (_context.Bank == null)
            {
                return NotFound();
            }
            var bank = await _context.Bank.FindAsync(id);
            if (bank == null)
            {
                return NotFound();
            }

            _context.Bank.Remove(bank);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BankExists(int id)
        {
            return (_context.Bank?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
